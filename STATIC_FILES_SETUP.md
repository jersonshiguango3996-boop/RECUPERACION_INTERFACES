# Configuración de Static Files en Django

## Estructura Creada

La estructura de carpetas para los archivos estáticos es:

```
inicio/static/
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css
│   │   ├── style.css
│   │   └── tiny-slider.css
│   ├── js/
│   │   └── main.js
│   └── img/
│       ├── (Aquí van tus imágenes: couch.png, product-1.png, etc.)
│       └── (favicon.png, user.svg, cart.svg, etc.)
├── css/
│   └── main.css
└── js/
    └── main.js
```

## Configuración en settings.py

La configuración actual es:

```python
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_DIRS = [
    BASE_DIR / 'inicio' / 'static',
]
```

## Cómo usar {% static %}

En los templates HTML, usa el template tag `{% static %}`:

### En la cabecera del template:
```django
{% load static %}
```

### Para cargar CSS:
```html
<link href="{% static 'assets/css/bootstrap.min.css' %}" rel="stylesheet">
<link href="{% static 'assets/css/style.css' %}" rel="stylesheet">
```

### Para cargar imágenes:
```html
<img src="{% static 'assets/img/couch.png' %}" class="img-fluid">
```

### Para cargar JavaScript:
```html
<script src="{% static 'assets/js/main.js' %}"></script>
```

## Próximos Pasos

1. **Descarga los archivos CSS y JS necesarios:**
   - Bootstrap 5: https://getbootstrap.com/
   - Tiny Slider: https://ganlanyuan.github.io/tiny-slider/
   - Font Awesome (ya está en CDN)

2. **Coloca las imágenes en `inicio/static/assets/img/`:**
   - couch.png
   - product-1.png, product-2.png, product-3.png
   - cross.svg, user.svg, cart.svg
   - Y todas las demás imágenes

3. **Ejecuta en desarrollo:**
   ```bash
   python manage.py runserver
   ```
   Django sirve automáticamente los static files en desarrollo.

4. **En producción:**
   ```bash
   python manage.py collectstatic
   ```
   Esto copia todos los archivos estáticos a la carpeta `staticfiles/`

## Archivos Actualizados

✅ header.html - Actualizado con {% static %}
✅ index.html - Actualizado con {% static %}
✅ inicio.html - Ya estaba correctamente configurado
✅ base.html - Ya estaba correctamente configurado
✅ settings.py - Configuración lista

## Archivos a Descargr

Necesitas descargar y colocar estos archivos en sus carpetas correspondientes:

**CSS:**
- Bootstrap.min.css → inicio/static/assets/css/
- Tiny-slider.css → inicio/static/assets/css/
- Style.css (personalizado) → inicio/static/assets/css/

**Imágenes:**
- Todas las imágenes .png y .svg → inicio/static/assets/img/

**JavaScript:**
- Main.js (personalizado) → inicio/static/assets/js/
