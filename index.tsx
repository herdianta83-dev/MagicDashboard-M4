import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, TextInput, 
  TouchableOpacity, SafeAreaView, StatusBar 
} from 'react-native';

export default function HomeScreen() {
  // --- STATE MANAGEMENT ---
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [bgColor, setBgColor] = useState('#FFFFFF');

  // --- LOGIC HANDLER ---
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const handleToggleColor = () => {
    const colors = ['#FFDEE9', '#B5FFFC', '#E2E2E2', '#D4FC79', '#FAD0C4'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.card}>
        <Text style={styles.header}>Magic Dashboard 🪄</Text>

        {/* --- GREETING SECTION --- */}
        <View style={styles.section}>
          <Text style={styles.greetText}>Halo, {name || 'Sobat IT'}!</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan nama kamu..."
            onChangeText={(val) => setName(val)}
            value={name}
          />
        </View>

        {/* --- COUNTER SECTION --- */}
        <View style={styles.section}>
          <Text style={styles.label}>Counter System</Text>
          <Text style={styles.countValue}>{count}</Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.btnMinus} onPress={handleDecrement}>
              <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnPlus} onPress={handleIncrement}>
              <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* --- SIDE QUEST SECTION --- */}
        <TouchableOpacity style={styles.btnMagic} onPress={handleToggleColor}>
          <Text style={styles.btnMagicText}>Ganti Warna Background</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: { 
    width: '85%', backgroundColor: 'white', padding: 25, 
    borderRadius: 30, alignItems: 'center', elevation: 15,
    shadowColor: '#000', shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1, shadowRadius: 20
  },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 25, color: '#333' },
  section: { width: '100%', alignItems: 'center', marginBottom: 30 },
  greetText: { fontSize: 18, fontWeight: '600', marginBottom: 10, color: '#444' },
  input: { 
    width: '100%', height: 45, borderWidth: 1, borderColor: '#DDD', 
    borderRadius: 12, paddingHorizontal: 15, backgroundColor: '#FAFAFA' 
  },
  label: { fontSize: 12, color: '#888', textTransform: 'uppercase' },
  countValue: { fontSize: 60, fontWeight: 'bold', marginVertical: 10, color: '#222' },
  row: { flexDirection: 'row', gap: 20 },
  btnPlus: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 50, width: 60, alignItems: 'center' },
  btnMinus: { backgroundColor: '#F44336', padding: 15, borderRadius: 50, width: 60, alignItems: 'center' },
  btnText: { color: 'white', fontSize: 24, fontWeight: 'bold' },
  btnMagic: { backgroundColor: '#6200EE', padding: 15, borderRadius: 15, width: '100%', alignItems: 'center' },
  btnMagicText: { color: 'white', fontWeight: 'bold' }
});