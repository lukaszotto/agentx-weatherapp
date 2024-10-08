import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppContainer from './AppContainer'

function App() {
    const queryClient = new QueryClient()

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <AppContainer />
            </QueryClientProvider>
        </>
    )
}

export default App
