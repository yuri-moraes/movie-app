import { Tabs } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
            name="index"
            options={{ 
                title: 'index',
                headerShown: false
             }}
        />
    </Tabs>
  )
}

export default _layout