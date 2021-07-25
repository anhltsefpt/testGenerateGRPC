// import SymbolGRPC from './components/protoc-gen-out/symbol_grpc_web_pb'
const { grpc } = require('@improbable-eng/grpc-web')
const { NodeHttpTransport } = require('@improbable-eng/grpc-web-node-http-transport')

const { Symbol } = require('./generated/grpc-web/definition_pb_service')
// const {grpc} = require("@improbable-eng/grpc-web")
const { ListOptions, SymbolOptionQuery } = require('./generated/grpc-web/definition_pb')

// const SymbolGRPC = require('./grpc-web/definition_grpc_web_pb')
grpc.setDefaultTransport(NodeHttpTransport())
async function test () {
    // console.log(ListOptions)
    const query = new SymbolOptionQuery()
    query.setDate('2023-01-20')
    query.setSymbol('TSLA')
    grpc.invoke(Symbol.GetOption, {
        host: 'https://grpc-web.stockscan.io',
        request: query,
        onMessage: (message) => {
            console.log(JSON.stringify(message, null, 4))
        },
        onEnd: (code, msg) => {
            if (code == grpc.Code.OK) {
                console.log('all ok')
            } else {
                console.log('hit an error', code, msg)
            }
        }
    })
    //   const symbolService = new SymbolGRPC.SymbolPromiseClient(
    //       'https://grpc-web.stockscan.io'
    //   )
    //   const query = new SymbolGRPC.SymbolOptionQuery()
    //   /*
    // symbol: 'TSLA',
    //   date: '2023-01-20'
    // */
    //   query.setSymbol('TSLA')
    //   query.setDate('2023-01-20')
    // const res = await symbolService.getOption(query)
    // console.log(res)
}

test()