
import { Allmusic, AudioPreview, ContactForm } from '@/components'
import PublicLayout from '@/layouts/public'

const Music = () => {
  return (
   <PublicLayout>
    <Allmusic/>
    <AudioPreview/>
      <ContactForm/>
   </PublicLayout>
  )
}

export default Music