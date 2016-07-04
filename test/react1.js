import chai from "chai"
import React from 'react'
import equalJSX from 'chai-equal-jsx'
import {createRenderer} from 'react-addons-test-utils'
import { App } from '../src/app'

chai.should()
chai.use(equalJSX)

describe('Fake react test', function(){
  it('works', function(){
    const renderer = createRenderer()
    renderer.render(React.createElement(App))
    const output = renderer.getRenderOutput()
    output.should.equalJSX(<h1>Hello World!</h1>)
  })

})
