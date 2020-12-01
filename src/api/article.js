import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/admin/articles',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/admin/article/' + id,
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

export function createArticle(data) {
  return request({
    url: '/admin/article',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/article' + data.id(),
    method: 'put',
    data
  })
}

export function deleteArticle(id) {
  return request({
    url: '/admin/article/' + id,
    method: 'delete'
  })
}
