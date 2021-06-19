function factory() {
	this.Get = function(name) {
		return JSON.parse(window.localStorage.getItem(name))
	}

	this.Set = function(name, value) {
		console.info('Storage Setted: ', name, value)

		window.localStorage.setItem(name, JSON.stringify(value))
	}

	this.Update = function(name, value) {
		console.info('Storage Updated: ', name, value)

		window.localStorage.removeItem(name)
		window.localStorage.setItem(name, JSON.stringify(value))
	}

  this.AddItem = function(name, new_obj) {
    let obj = window.localStorage.getItem(name)

    if(!!obj && !!new_obj){
      obj = Object.assign(JSON.parse(obj), new_obj)
    }

		window.localStorage.setItem(name, JSON.stringify(obj))

    console.info('Storage Item added: ', name, JSON.stringify(obj))
	}

	this.Remove = function(param) {
		console.log('Storage Removed')

		if (!(param instanceof Array) && typeof param !== 'string') {
			return false
		}

		if (param instanceof Array) {
			for (let i = 0; i < param.length; i++) {
				window.localStorage.removeItem(param[i])
			}
		} else {
			window.localStorage.removeItem(param)
		}

		return true
	}
}

export default new factory()
