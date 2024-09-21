import { ContactForm, Press, PressHome } from '@/components'

import PublicLayout from '@/layouts/public'

const press = () => {
  return (
    <PublicLayout>
      <PressHome />
      <Press />
      <ContactForm />
    </PublicLayout>
  )
}

export default press