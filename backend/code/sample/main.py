import ptvsd
ptvsd.enable_attach( address = ('0.0.0.0', 5678))
ptvsd.wait_for_attach()    


print("1")
print("2")
print("3")


