import { Allmusic, AudioPreview, ContactForm, MusicMain } from '@/components'
import PublicLayout from '@/layouts/public'

const Music = () => {
  return (
    <PublicLayout>
      <MusicMain/>
      <Allmusic />
      <AudioPreview />
      <ContactForm />
    </PublicLayout>
  )
}

export default Music
