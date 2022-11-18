import { VStack, Heading, Text } from 'native-base'
import React from 'react'

import Logo from '../assets/logo.svg'

import { Button } from '../components/Button'
import { Header } from '../components/Header'
import { Input } from '../components/Input'


export function Find() {
  return (
    <VStack flex={1} bgColor="gray.900">
        <Header title="Search by code" showBackButton/>

        <VStack mt={8} mx={5} alignItems="center">

            <Heading fontFamily="heading" color="white" fontSize="xl" mb={8} textAlign="center">
                Search a pool by it's code
            </Heading>

            <Input
                mb={2}
                placeholder="What's the pool code?"
            />

            <Button
                title="CREATE MY POOL"
            />

        </VStack>
    </VStack>
  )
}
