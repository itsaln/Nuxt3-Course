import { createClient } from '@supabase/supabase-js'

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsaXdhbGdnZnVyd2lwa3p4bmdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU0MDMyNjgsImV4cCI6MTk4MDk3OTI2OH0.4KBf9i4FcPRtOHSldAAGxjMMtI307VJjHfygau-Zc6c'
const SUPABASE_URL = 'https://sliwalggfurwipkzxngp.supabase.co'
const useSupabase = () => {
	const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

	return {
		supabase
	}
}

export default useSupabase
