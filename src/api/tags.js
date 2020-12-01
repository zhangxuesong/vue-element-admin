import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/admin/tags',
    method: 'get',
    params: query
  })
}

export function fetchTags(id) {
  return request({
    url: '/admin/tag/' + id,
    method: 'get'//,
    // params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createTags(data) {
  return request({
    url: '/admin/tag',
    method: 'post',
    data
  })
}

export function updateTags(data) {
  return request({
    url: '/admin/tag/' + data.id,
    method: 'put',
    data
  })
}

export function deleteTags(id) {
  return request({
    url: '/admin/tag/' + id,
    method: 'delete'
  })
}
