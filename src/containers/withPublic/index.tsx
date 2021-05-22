import { Component } from 'react'

import { NextPageContext } from 'next'
import Router from 'next/router'
import nextCookie from 'next-cookies'

import PublicLayout from '~/components/Layout/Public'

export default function withPublic(WrappedComponent: any) {
  const notAuthenticated = (ctx) => {
    try {
      const token = nextCookie(ctx)

      if (ctx.req && token.accessToken) {
        ctx.res.writeHead(302, { Location: '/home' })
        ctx.res.end()
      }

      if (token.accessToken) {
        Router.push('/home')
      }
    } catch (error) {
      //
    }
  }

  return class Authenticated extends Component {
    static async getInitialProps(ctx: NextPageContext) {
      const token = notAuthenticated(ctx)

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx))

      return {
        ...componentProps,
        token,
        path: ctx.pathname,
      }
    }

    render() {
      return (
        <PublicLayout>
          <WrappedComponent
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...this.props}
          />
        </PublicLayout>
      )
    }
  }
}
