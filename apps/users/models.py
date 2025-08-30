from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    ROLE_CHOICES = [
        ('lector', 'Lector'),
        ('autor', 'Autor'),
        ('editor', 'Editor'),
        ('admin', 'Admin')
    ]
    bio = models.TextField(
        help_text='Cuéntanos un poco de ti.. Opcional',
        blank=True,
        null=True)
    
    avatar = models.ImageField(
        'Foto de perfil',
        upload_to='avatars/%Y/%m/',
        null=True,
        blank=True,
        help_text='Opcional')
    
    website = models.URLField(blank=True)
    twitter = models.CharField(max_length=50, blank=True)
    github = models.CharField(max_length=50, blank=True)
    linkedin = models.CharField(max_length=50, blank=True)

    email_verified = models.BooleanField(
        'Email verificado',
        default=False
    )
    role = models.CharField(
        'Rol del usuario',
        max_length=20,
        choices=ROLE_CHOICES,
        default='lector'
    )
    created_at = models.DateTimeField('Fecha de creación', auto_now_add=True)
    updated_at = models.DateTimeField('Última actualización', auto_now=True)
    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'
    
    def __str__(self):
        if self.first_name and self.last_name:
            return f"{self.first_name} {self.last_name} ({self.email})"
        else:
            return f"{self.username} ({self.email})"
    
    @property
    def get_full_name(self) -> str:
        return f"{self.first_name} {self.last_name}".strip()
    
    def can_publish(self):
        return self.role in ['autor', 'editor', 'admin'] and self.is_active
    
    