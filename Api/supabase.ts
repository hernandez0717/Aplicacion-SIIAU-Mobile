import * as SecureStore from 'expo-secure-store'
import { createClient } from '@supabase/supabase-js'

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key)
  },
  setItem: (key: string, value: string) => {
    SecureStore.setItemAsync(key, value)
  },
  removeItem: (key: string) => {
    SecureStore.deleteItemAsync(key)
  },
}

// Constructor de las keys de supabase para el cliente
const supabaseUrl = 'https://ahwkcjulpkvufethklov.supabase.co';  
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFod2tjanVscGt2dWZldGhrbG92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2MzQ1MTQsImV4cCI6MjA0NTIxMDUxNH0.nxNYgj-q_MtxwkWT5CyNWRMa0CYNdhVW7TeX1OGPJgU'; 

console.log('supabaseUrl', supabaseUrl)

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      storage: ExpoSecureStoreAdapter as any,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  })


