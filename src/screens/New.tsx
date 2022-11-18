import { VStack, Heading, Text } from 'native-base'
import React from 'react'

import Logo from '../assets/logo.svg'

import { Button } from '../components/Button'
import { Header } from '../components/Header'
import { Input } from '../components/Input'


export function New() {
  return (
    <VStack flex={1} bgColor="gray.900">
        <Header title="Create New Poll"/>

        <VStack mt={8} mx={5} alignItems="center">
            <Logo/>

            <Heading fontFamily="heading" color="white" fontSize="xl" my={8} textAlign="center">
                Create your own betting pool and share it with your friends!
            </Heading>

            <Input
                mb={2}
                placeholder="Your pool name"
            />

            <Button
                title="CREATE MY POOL"
            />

            <Text color="gray.200" fontSize="sm" textAlign="center" px={6} mt={4}>
                After creating your pool, you'll receive a unique 
                code that you can use to invite other to join
            </Text>

        </VStack>
    </VStack>
  )
}
