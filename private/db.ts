import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'db.hlvnjskgsinpvkndlgpc.supabase.co'
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhsdm5qc2tnc2lucHZrbmRsZ3BjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUxMDEzNjcsImV4cCI6MjAwMDY3NzM2N30.rorNm33PY2sl5XiJ3cd6LJcbeJBXG7R0PpCxGs7bhOs
const supabase = createClient(supabaseUrl, supabaseKey)