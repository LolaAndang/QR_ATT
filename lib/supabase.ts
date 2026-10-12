import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://nutbzfqddqivgnnxubaz.supabase.co";
const supabaseAnonKey = "sb_publishable_R8DJ1VAG3ue0480a6Yp_ew_H5voFVZh";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
