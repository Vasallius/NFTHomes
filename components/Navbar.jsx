import React from 'react'
import { Box, Flex, Spacer, useColorModeValue, IconButton, useDisclosure, Stack, Text } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/logo.png'
import { ChangeNetwork, ConnectModal, DisconnectButton, OutlineCard, Wallet } from '@xircus-web3/components';

function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const links = [
        { href: '/', label: 'Home' },
        { href: '/mylistings', label: 'Listings' },
        { href: '/my-profile', label: 'Profile' },
    ];

    return (
        <Box bg={useColorModeValue('white', 'gray.900')} px={14}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />

                <Link href="/">
                    <div className='flex flex-row gap-4 justify-center'>
                    <Image src={Logo} alt="Logo" width={40}/>
                    <Text fontSize={'xl'} fontWeight={'bold'} className="self-center">
                        NFThomes
                    </Text>
                    </div>
                </Link>
                <Spacer />
                <Box display={{ base: 'none', md: 'flex' }}>
                    {links.map((link) => (
                        <Link key={link.href} href={link.href}>

                            <Text px={4} py={2} fontWeight="bold">
                                {link.label}
                            </Text>

                        </Link>
                    ))}
                <ConnectModal>
                    <Wallet />
                </ConnectModal>

                </Box>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        {links.map((link) => (
                            <Link key={link.href} href={link.href}>

                                <Text px={4} py={2} fontWeight="bold">
                                    {link.label}
                                </Text>

                            </Link>
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
}

export default Navbar

