import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yhfljqsbzuovorlwctyu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InloZmxqcXNienVvdm9ybHdjdHl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyMzgwMjgsImV4cCI6MjA5MjgxNDAyOH0.cJauC7SndPldPtnXMy-ovdCukr7LW0oyYEdeyOdcqI0'
const supabase = createClient(supabaseUrl, supabaseKey)

async function obtenerEstudiantes() {
  console.log("Conectando con Supabase...");
  
  const { data, error } = await supabase
    .from('Estudiantes')
    .select('*')

  if (error) {
    console.error('Error de Supabase:', error.message)
  } else {
    console.log('¡Éxito! Datos:', data)
  }
}
obtenerEstudiantes()