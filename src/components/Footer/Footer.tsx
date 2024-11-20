import { iconPaths } from "@/utils"
import { Icon } from "../Icon"

interface SocialNetworksProps {
  label: string,
  url: string,
  icon: keyof typeof iconPaths
}

const socialNetworks: SocialNetworksProps[] = [
  {
    label: 'instagram',
    url: 'https://www.instagram.com/lombardidev/',
    icon: 'instagram'
  },
  {
    label: 'youtube',
    url: 'https://www.instagram.com/lombardidev/',
    icon: 'youtube'
  },
]


const Footer = () => {
  return (
    <>
      <div className="py-2 fc-gap-2">
        <div className="flex flex-col items-center">
          <p>Contactos</p>
          <ul className="fr-gap-2">
            {
              socialNetworks &&
              socialNetworks.map(({ label, url, icon }: SocialNetworksProps, index) => (
                <li key={index}>
                  <a href={url} aria-label={label}>
                    <Icon icon={icon} size="24" />
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
        <p>Desarrollado por <span className="font-bold">@lombardidev</span></p>
      </div>
    </>
  )
}

export { Footer }