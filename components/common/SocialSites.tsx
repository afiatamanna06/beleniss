import { Flex } from "@chakra-ui/react"
import Link from "next/link"
import socialLinks from "./SocialLinks"

function SocialSites() {
  return (
    <Flex gap={2}>
        {socialLinks.map(({Icon, path}) => (
            <Link key={path} href={path} passHref>
                <Icon cursor="pointer" color="#7e2147d8" size={18} />
            </Link>
        ))}
    </Flex>
  )
}

export default SocialSites