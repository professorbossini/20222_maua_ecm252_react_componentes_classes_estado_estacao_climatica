import React, { Component } from 'react'

export class Loading extends Component {
  render() {
    return (
      // .d-flex.justify-content-center.align-items-center.border.rounded.p-3
      <div
        className="d-flex flex-column justify-content-center align-items-center border rounded p-3">
          {/* .spinner-border.text-primary */}
          <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}}>
            {/* span.visually-hidden{Carregando...} */}
            <span className="visually-hidden">Carregando...</span>
          </div>
          {/* p.text-primary{Por favor, responda à solicitação de localização} */}
          <p className="mt-3 text-primary">
            {/* Por favor, responda à solicitação de localização */}
            {/* {this.props.mensagem ?? 'Carregando'} */}
            {this.props.mensagem}
          </p>
      </div>
    )
  }
}

Loading.defaultProps = {
  mensagem: 'Carregando'
}

export default Loading