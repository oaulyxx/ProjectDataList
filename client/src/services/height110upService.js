import Api from '@/services/Api'
export default {
    index(height110up) {
        return Api().get('height110ups')
    },
    show(height110upId) {
        return Api().get('height110up/' + height110upId)
    },
    post(height110up) {
        return Api().post('height110up', height110up)
    },
    put(height110up) {
        return Api().put('height110up/' + height110up.id, height110up)
    },
    delete(height110up) {
        return Api().delete('height110up/' + height110up.id, height110up)
    },
}