# bit packing explorer
This is a tool I made to understand binary formats, including those which pack information into formats which use carefully chosen numbers of bits (not necessarily aligning with byte boundaries) to minimize the size taken up by each component.
Try it out at: https://jsdf.github.io/bit-packing-explorer

## what is bit packing?
Bit packing involves storing multiple values (called bit fields) in as few bits as possible, 'packed' into a contiguous binary value. For example, storing a pixel's color and transparency in 32 bits using 8 bits for the red, green, blue and alpha channels.

Bit packing has various usecases, such as to save memory, or to make the code run faster by packing pieces of data into a single value that the system's hardware can deal with natively (for example, a 32-bit integer on a system with a 32-bit word size). See also: bit fields, bit manipulation, binary files, Data Compression: Bit-Packing 101
