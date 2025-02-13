import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import SubNotifications from './SubNotifications'

const SAMPLE_NOTIFICATIONS = [
  {
    id: 1,
    imageUrl: "https://drive.google.com/uc?export=view&id=1oKPDzeyfda3pOQ00UcwJzM_q8LeB0drL",
    title: "UnderTesting",
    body: "Test",
    specificUrl: ""
  }
  // Add more notifications here as needed
];

const NotificationItems = ({ notifications = SAMPLE_NOTIFICATIONS }) => {
  return (
    <ScrollView 
      contentContainerStyle={styles.container} 
      showsHorizontalScrollIndicator={false}
    >
      {notifications.map((notification) => (
        <SubNotifications
          key={notification.id}
          url1={notification.imageUrl}
          title={notification.title}
          body={notification.body}
          specificUrl={notification.specificUrl}
        />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 15,
  }
});

export default NotificationItems