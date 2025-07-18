from django.db import models
from django.conf import settings
from django.utils.text import slugify

class Category(models.Model):
    name = models.CharField('Nombre de la categoría', max_length=200, unique=True)
    slug = models.SlugField(max_length=150, unique=True, blank=True)
    is_active = models.BooleanField(default=True)
    class Meta:
        verbose_name = 'Categoría'
        verbose_name_plural = 'Categorías'
        ordering = ['name']
    
    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if not self.slug:
            slug = slugify(self.name)
        super().save(*args, **kwargs)


class Post(models.Model):
    title = models.CharField('Título', max_length=150)
    slug = models.SlugField(max_length=150, unique=True, blank=True)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE, 
        related_name='Autor'
    )
    body = models.TextField('Contenido')
    category = models.ForeignKey(
        Category, 
        on_delete=models.CASCADE,
        related_name='Categoría'
    )
    created_at = models.DateTimeField(
        'Creado en',
        auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Actualizado en',
        auto_now=True
    )
    
    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            slug = slugify(self.title)
        super().save(*args, **kwargs)
