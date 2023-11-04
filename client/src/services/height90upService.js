import Api from '@/services/Api'
export default {
    index(height90up) {
        return Api().get('height90ups')
    },
    show(height90upId) {
        return Api().get('height90up/' + height90upId)
    },
    post(height90up) {
        return Api().post('height90up', height90up)
    },
    put(height90up) {
        return Api().put('height90up/' + height90up.id, height90up)
    },
    delete(height90up) {
        return Api().delete('height90up/' + height90up.id, height90up)
    },
}