import sqlite3 from 'sqlite3'
import { open, Database } from 'sqlite'

let db: Database | null = null

export async function getDatabase(): Promise<Database> {
  if (!db) {
    db = await open({
      filename: './visitor-consent.db',
      driver: sqlite3.Database
    })
    
    // Create tables if they don't exist
    await db.exec(`
      CREATE TABLE IF NOT EXISTS visitor_consents (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        session_id TEXT UNIQUE,
        ip_address TEXT,
        name TEXT NOT NULL,
        company TEXT NOT NULL,
        email TEXT NOT NULL,
        user_agent TEXT,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        consent BOOLEAN DEFAULT 1,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
      
      CREATE INDEX IF NOT EXISTS idx_session_id ON visitor_consents(session_id);
      CREATE INDEX IF NOT EXISTS idx_ip_address ON visitor_consents(ip_address);
      CREATE INDEX IF NOT EXISTS idx_timestamp ON visitor_consents(timestamp);
    `)
  }
  return db
}

export async function storeConsent(data: {
  sessionId?: string
  ipAddress: string
  name: string
  company: string
  email: string
  userAgent: string
  consent: boolean
}) {
  const database = await getDatabase()
  
  try {
    await database.run(`
      INSERT OR REPLACE INTO visitor_consents 
      (session_id, ip_address, name, company, email, user_agent, consent, timestamp)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      data.sessionId || null,
      data.ipAddress,
      data.name,
      data.company,
      data.email,
      data.userAgent,
      data.consent ? 1 : 0,
      new Date().toISOString()
    ])
    
    return true
  } catch (error) {
    console.error('Error storing consent:', error)
    return false
  }
}

export async function checkConsent(sessionId?: string, ipAddress?: string): Promise<any> {
  const database = await getDatabase()
  
  try {
    let query = `
      SELECT * FROM visitor_consents 
      WHERE consent = 1 
      AND timestamp > datetime('now', '-1 year')
    `
    const params: any[] = []
    
    if (sessionId) {
      query += ' AND session_id = ?'
      params.push(sessionId)
    } else if (ipAddress) {
      query += ' AND ip_address = ?'
      params.push(ipAddress)
    } else {
      return null
    }
    
    query += ' ORDER BY timestamp DESC LIMIT 1'
    
    const result = await database.get(query, params)
    return result
  } catch (error) {
    console.error('Error checking consent:', error)
    return null
  }
}

export async function cleanupOldRecords() {
  const database = await getDatabase()
  
  try {
    // Remove records older than 1 year
    await database.run(`
      DELETE FROM visitor_consents 
      WHERE timestamp < datetime('now', '-1 year')
    `)
    
    console.log('Cleaned up old consent records')
  } catch (error) {
    console.error('Error cleaning up old records:', error)
  }
}

// Clean up old records every day
if (typeof window === 'undefined') {
  setInterval(cleanupOldRecords, 24 * 60 * 60 * 1000) // 24 hours
}
