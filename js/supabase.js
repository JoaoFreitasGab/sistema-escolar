// Cole aqui os dados do seu projeto Supabase.
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://mmaodrkmyaxyyqsfvbpb.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_flqFME0YyrNJamqjiAVYTQ_3M22ZIav";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
