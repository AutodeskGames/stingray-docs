# Package Wwise sound banks

Any bank used by the game must have its *.wwise_dep* dependency file added to a package file loaded by the game. You must always add the automatically generated *wwise/Init* resource to the boot package.

For example:

~~~{sjson}
wwise_dep = [
   "wwise/Init"

   "wwise/Main"
]
~~~
