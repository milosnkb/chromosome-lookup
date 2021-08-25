# Brief

Attached is a file "input_tiny.vcf" - this is an extract from a real genetic file, reporting the genetic sequence of someone. Any line starting with # is a comment. For a given chromosome (column "CHROM") and position(column "POS  ID"), we need to extract the allele (column "ALT").

Write a simple function that takes inputs chromosome and position and outputs the matching allele.
Don't worry about performance or tests for now.

For example:
chr1:16837 is "C"
chr1:17655 is "T"

Hint: treat the file like you would a CSV file

Use any libraries, packages or search on the internet as you would normally code.
Do not spend more than 1 hour on this - not looking for a perfect solution that is production-ready and full tested, more how you approach the problem and thinking behind it.

Please also provide:
What are the limitation/problems with this solution?
Fragile to data incorrectness, possible performance issues with adding more computing logic.

How would it scale?
There is a couple of strategies, first would be with process manager like PM2 with cluster feature.
If we need to scale even further, we might choose deploying multiple nodes with some network load balancing.

How would you test it efficiently?
With some test library like Artillery and loading requests per second, increasing in unit of time, checking a breaking point.
I would also check with increasing a data size with simultaneous requests.