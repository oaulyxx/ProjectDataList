import Api from '@/services/Api'
export default {
    index(height130up) {
        return Api().get('height130ups')
    },
    show(height130upId) {
        return Api().get('height130up/' + height130upId)
    },
    post(height130up) {
        return Api().post('height130up', height130up)
    },
    put(height130up) {
        return Api().put('height130up/' + height130up.id, height130up)
    },
    delete(height130up) {
        return Api().delete('height130up/' + height130up.id, height130up)
    },
}