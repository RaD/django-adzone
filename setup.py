from setuptools import setup, find_packages

setup(
    name='django-colorfield',
    version='0.3',
    description="A django app to manage adverts according to zones on a website.",
    author='Ruslan Popov',
    author_email='ruslan.popov@gmail.com',
    url="http://github.com/RaD/django-adzone",
    packages=find_packages(),
    include_package_data=True,
    classifiers=[
          'Framework :: Django',
          'Intended Audience :: Developers',
          'Intended Audience :: System Administrators',
          'Operating System :: OS Independent',
          'Topic :: Software Development'
    ],
)
