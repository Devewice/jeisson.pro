import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import session from 'express-session'

function fileFor(dir, sid) {
  const name = crypto.createHash('sha256').update(String(sid)).digest('hex')
  return path.join(dir, `${name}.json`)
}

export function createFileSessionStore(dir) {
  fs.mkdirSync(dir, { recursive: true })

  class FileStore extends session.Store {
    get(sid, callback) {
      fs.readFile(fileFor(dir, sid), 'utf8', (err, raw) => {
        if (err) {
          callback(err.code === 'ENOENT' ? null : err, null)
          return
        }
        try {
          callback(null, JSON.parse(raw))
        } catch (parseErr) {
          callback(parseErr)
        }
      })
    }

    set(sid, sess, callback) {
      const file = fileFor(dir, sid)
      const tmp = `${file}.${process.pid}.tmp`
      fs.writeFile(tmp, JSON.stringify(sess), (err) => {
        if (err) {
          callback(err)
          return
        }
        fs.rename(tmp, file, callback)
      })
    }

    destroy(sid, callback) {
      fs.unlink(fileFor(dir, sid), () => callback?.(null))
    }
  }

  return new FileStore()
}
