import { createClient } from '@supabase/supabase-js';

// Paste your copied credentials right here
const supabaseUrl = 'https://dxhydtntyzvxukakxdup.supabase.co/rest/v1/'; 
const supabaseAnonKey = 'sb_publishable_ZSNiCTK-FHEa3pi-71DFZA_eJSsKoNp'; // Paste the full copied key here

export const supabase = createClient(supabaseUrl, supabaseAnonKey);