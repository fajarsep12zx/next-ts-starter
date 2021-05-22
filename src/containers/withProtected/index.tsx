import { Component } from 'react'

import { NextPageContext } from 'next'
import Router from 'next/router'
import nextCookie from 'next-cookies'

import ProtectedLayout from '~/components/Layout/Protected'

export default function withProtected(WrappedComponent: any) {
  const authenticated = async (ctx) => {
    try {
      const token = nextCookie(ctx)

      if (ctx.req && !token) {
        ctx.res.writeHead(302, { Location: '/' })
        ctx.res.end()
        return
      }

      // eslint-disable-next-line consistent-return
      return token.accessToken
    } catch (error) {
      ctx.res.writeHead(302, { Location: '/' })
      ctx.res.end()
    }
  }

  return class Authenticated extends Component {
    static async getInitialProps(ctx: NextPageContext) {
      const token = authenticated(ctx)

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx))

      return {
        ...componentProps,
        token,
        path: ctx.pathname,
      }
    }

    componentDidMount() {
      window.addEventListener('storage', this.syncLogout)
    }

    componentWillUnmount() {
      window.removeEventListener('storage', this.syncLogout)
      window.localStorage.removeItem('logout')
    }

    syncLogout = (event: any) => {
      if (event.key === 'logout') {
        Router.push('/')
      }
    }

    render() {
      return (
        <ProtectedLayout>
          <WrappedComponent
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...this.props}
          />
        </ProtectedLayout>
      )
    }
  }
}
