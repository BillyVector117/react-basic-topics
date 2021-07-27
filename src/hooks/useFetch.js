import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null) // Data in JSON format will mount here
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        // Use Abort controller to manage errors in case API does not responses
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async () => {
            setLoading(true)

            // Only allows GET method
            try {
                const response = await fetch(url)
                // If fails (fetch does not complete), create a new error Object
                if (!response.ok) {
                    let error = new Error("Error in fetch request") // object type
                    error.status = response.status || "00";
                    error.statusText = response.statusText || "Something went wrong"
                    throw error // This throw redirects to catch() block
                }
                // In case success request fetch()
                const json = await response.json();
                // Validate signal Abort is false
                if (!signal.aborted) {
                    setData(json); // Mount data at state
                    setError(null)
                }
            } catch (error) {
                // Validate if error is different to "Abort" type (404,etc)
                if (!signal.aborted) {
                    setData(null);
                    setError(error)
                }
            }
            finally {
                // Set loading (spinner) off
                if (!signal.aborted) {
                    setLoading(false)
                }
            }
        }
        fetchData()
        return () => abortController.abort()
    }, [url])

    return { data, error, loading }
}





