import api from './axios'

export function analyzeEndpointsApi(modelName, userQuery) {
  return api.post('/analyze-endpoints', {
    model_name: modelName,
    user_query: userQuery
  })
}
