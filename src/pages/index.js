import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import FirebaseDemo from '../components/FirebaseDemo'
import InputDemo from '../components/InputDemo'
import TextField from '../components/TextField'
import SimpleEdit from '../components/SimpleEdit'

const Index = () => {
  const title = 'Home'
  return (
    <Layout siteTitle={title}>
      <SEO title={title} />
      <FirebaseDemo />
      <div className="p-8 my-10 rounded-md bg-gray-700 shadow-md">
        <InputDemo />
      </div>
      <div className="flex justify-items-center items-center py-4 my-10 mx-8 space-y-4">
        <div className="w-1/2">
          <TextField
            id="test-text-field"
            name="text-field-name"
            label="Hi I'm label"
            placeholder="Hi I'm placeholder"
          />
          <TextField
            required
            type="email"
            id="test-text-field-email"
            name="input-email-name"
            label="email label"
            placeholder="email placeholder"
          />
        </div>
      </div>
      <div>
        <SimpleEdit />
      </div>
    </Layout>
  )
}

export default Index
