import Api from '@/services/Api'
export default {
    index(height155up) {
        return Api().get('height155ups')
    },
    show(height155upId) {
        return Api().get('height155up/' + height155upId)
    },
    post(height155up) {
        return Api().post('height155up', height155up)
    },
    put(height155up) {
        return Api().put('height155up/' + height155up.id, height155up)
    },
    delete(height155up) {
        return Api().delete('height155up/' + height155up.id, height155up)
    },
}