import React, { ReactElement, RefObject, useRef, useState } from 'react'
import Button from './Button/Button'
import Conditional from './Conditional'
import FlexCol from './Flex/FlexCol'
import TextInput from './TextInput/TextInput'

function Login({
  LoginTitle,
  login,
  AdditionalLogins,
  createAccount,
  requireEmail,
}: {
  LoginTitle: ReactElement
  login: (username: string, password: string, email?: string, setLoginLoading?: (loading: boolean) => void, usernameRef?: RefObject<HTMLDivElement>) => void
  AdditionalLogins?: ReactElement[]
    createAccount?: (username: string, password: string, email?: string, setCreateLoading?: (loading: boolean) => void, usernameRef?: RefObject<HTMLDivElement>) => void
  requireEmail?: boolean
}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = requireEmail ? useState('') : ['', () => {}]
  const [loginLoading, setLoginLoading] = useState(false)
  const [createLoading, setCreateLoading] = typeof createAccount === 'function' ? useState(false) : [false, () => {}]
  const usernameRef = useRef<HTMLInputElement>(null)
  return (
    <FlexCol
      height='100vh'
      width='100vw'
      alignItems='center'
      justifyContent='center'
    >
      <FlexCol
        alignItems='center'
        padding='5em'
        //backgroundColor={colors.centerMenu}
        width='max-content'
        style={{ borderRadius: '1em' }}
      >
        {LoginTitle}
        <TextInput
          label='username'
          inputRef={usernameRef}
          value={username}
          onChange={e => setUsername(e.target.value)}
          onEnter={() => login(username, password, email, setLoginLoading, usernameRef)}
        />
        <Conditional showIf={requireEmail ? true : false}>
          <TextInput
            label='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            onEnter={() => login(username, password, email, setLoginLoading, usernameRef)}
          />
        </Conditional>
        <TextInput
          label='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          onEnter={() => login(username, password, email, setLoginLoading, usernameRef)}
          password
        />
        <Button
          onClick={() => login(username, password, email, setLoginLoading, usernameRef)}
        >
          {loginLoading ? '...' : 'login'}
        </Button>
        {AdditionalLogins}
        <Conditional showIf={typeof createAccount === 'function'}>
          <Button
            onClick={() => (createAccount as any)(username, password, email, setCreateLoading, usernameRef)}
          >
            {createLoading ? '...' : 'create account'}
          </Button>
        </Conditional>
      </FlexCol>
    </FlexCol>
  )
}

export default Login