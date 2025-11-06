import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xbgxqjnhfbcgcprdpbfn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiZ3hxam5oZmJjZ2NwcmRwYmZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5OTQyMTMsImV4cCI6MjA3NjU3MDIxM30.vPJtx8zPcEesXAxusIsz0QEjnCiLclGz5O0Qf4x4nyk'

export const supabase = createClient(supabaseUrl, supabaseKey)
