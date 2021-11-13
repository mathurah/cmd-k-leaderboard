import React from 'react'

import { Box, Text } from '@chakra-ui/react'
const Header = () => {
    return (
        <Box as='header' h='10vh' display='flex' alignItems='center' flexDir='column'>
            <Text as='h1' fontSize='2.5rem'> Cmd+k* is awesome </Text>
            <Text>Vote to get it added to your favorite apps*</Text>
        </Box>
    )
}

export default Header
