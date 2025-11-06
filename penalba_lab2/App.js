import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
    
      <View style={styles.card}>

   <Text style={styles.pageTitle}> STUDENT INFO</Text>
       
        <Image 
          source={{ uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6512b831a23dcff44973646e9a41c80e" }} 
          style={styles.profilePic}
          resizeMode="cover"
        />

        <Text style={styles.name}>Lannah Eloise H. Peñalba</Text>
        <Text style={styles.smallText}>20 • BSCS 3-4</Text>

        {/* About Me */}
        <View style={styles.box}>
          <Text style={styles.boxTitle}>About Me</Text>
          <Text style={styles.textItem}>
            I am a BS Computer Science student currently learning the basics of programming
            and system development. I am interested in improving my skills by working on
            school projects and exploring different technologies. I am open to learning new
            things and gaining more hands-on experience.
          </Text>
        </View>

        {/* Achievements */}
        <View style={styles.box}>
          <Text style={styles.boxTitle}>Achievements</Text>
          <Text style={styles.centerTextItem}>• Completed group research and class projects</Text>
          <Text style={styles.centerTextItem}>• Helped develop simple workflows for system projects</Text>
          <Text style={styles.centerTextItem}>• Improved project documentation writing skills</Text>
        </View>

        {/* Skills */}
        <View style={styles.box}>
          <Text style={styles.boxTitle}>Skills</Text>
          <Text style={styles.centerTextItem}>• Basic Programming</Text>
          <Text style={styles.centerTextItem}>• System Documentation & Planning</Text>
          <Text style={styles.centerTextItem}>• Research & Information Gathering</Text>
          <Text style={styles.centerTextItem}>• Team Collaboration</Text>
          <Text style={styles.centerTextItem}>• Willingness to Learn</Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8b5e3c',
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: '#E5D3B3',
    padding: 18,
    paddingTop: 50,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#5B4636',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  pageTitle: {
        fontSize: 30,
    fontWeight: '700',
    color: '##f7efe6',
    textAlign: 'center',
    marginBottom: 10,
    paddingBottom: 20,
  },

  profilePic: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#C4A484',
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#5B4636',
  },
  smallText: {
    fontSize: 14,
    color: '#6B5844',
    marginBottom: 20,
  },
  box: {
    width: '100%',
    backgroundColor: '#FFF9F2',
    borderRadius: 18,
    padding: 18,
    marginTop: 18,
  },
  boxTitle: {
    fontSize: 21,
    fontWeight: '700',
    color: '#5B4636',
    textAlign: 'center',
    marginBottom: 10,
  },
  textItem: {
    fontSize: 15,
    color: '#4F4336',
    lineHeight: 22,
    textAlign: 'justify',
    marginBottom: 5,
  },
  centerTextItem: {
    fontSize: 15,
    color: '#4F4336',
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 5,
  },
});
