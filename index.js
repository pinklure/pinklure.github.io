DIV("eBPF")
.site("eBPF", "", "https://ebpf.io")
.site("Cilium", "Linux Native, API-Aware Networking and Security for Containers", "https://cilium.io/")
.site("Perfetto", "System profiling, app tracing and trace analysis", "https://perfetto.dev/")
.site("波粒派", "", "https://www.bolipi.com/ebpf/index")
.site("iovisor/bcc", "", "https://github.com/iovisor/bcc")
.blog("Brendan Gregg's Homepage", "", "https://www.brendangregg.com/")
.blog("ARTHURCHIAO'S BLOG", "", "https://arthurchiao.art/index.html")
.blog("Andrii Nakryiko's Blog", "", "https://nakryiko.com/posts/")
.article("Linux Performance Analysis in 60,000 Milliseconds", "", "https://netflixtechblog.com/linux-performance-analysis-in-60-000-milliseconds-accc10403c55")
.article("Learn eBPF Tracing: Tutorial and Examples", "", "https://www.brendangregg.com/blog/2019-01-01/learn-ebpf-tracing.html")
.END();

DIV("RT Linux")
.site("Real-Time Linux Wiki", "", "https://rt.wiki.kernel.org/index.php/Main_Page")
.article("Linux Preemption模式", "", "https://www.yuanguohuo.com/2020/03/31/linux-preemption-mode/")
.article("Proper Locking Under a Preemptible Kernel: Keeping Kernel Code Preempt-Safe", "", "https://www.kernel.org/doc/html/latest/locking/preempt-locking.html")
.article("Preemption Models", "", "https://wiki.linuxfoundation.org/realtime/documentation/technical_basics/preemption_models")
.article("Realtime kernel patchset", "", "https://wiki.archlinux.org/title/Realtime_kernel_patchset")
.END();

DIV("Linux kernel")
.site("Linux Kernel Documentation", "", "https://docs.kernel.org/index.html")
.site("Linux Kernel Newbies", "", "https://kernelnewbies.org/")
.site("Linux Weekly News", "", "https://lwn.net/")
.site("The Linux Documentation Project", "", "https://tldp.org/")
.site("Phoronix", "Latest Linux Hardware Reviews, Open-Source News & Benchmarks", "https://www.phoronix.com/")
.site("bootlin", "Read Source Code Online", "https://elixir.bootlin.com/linux/latest/source")
.site("LWN Kernel index", "articles published in the LWN.net Kernel Page", "https://lwn.net/Kernel/Index/")
.blog("public0821 的文章 - SegmentFault 思否", "Blog about Linux Networking", "https://segmentfault.com/u/public0821/articles?page=1")
.blog("Corkami -- reverse engineering & technical illustrations", "", "https://corkami.github.io/")
.book("Linkers and Loaders", "", "https://www.iecc.com/linkers/")
.book("The Linux Kernel, by TLDP", "", "https://tldp.org/LDP/tlk/tlk.html")
.book("Linux Device Drivers, Third Edition", "", "https://lwn.net/Kernel/LDD3/")
.collection("Kernel Docs: locking", "", "https://www.kernel.org/doc/html/latest/locking/index.html")
.collection("Kernel Docs: RCU", "", "https://www.kernel.org/doc/html/latest/RCU/")
.article("Executable_and_Linkable_Format", "", "https://en.wikipedia.org/wiki/Executable_and_Linkable_Format")
.article("How to Write Shared Libraries", "", "https://akkadia.org/drepper/dsohowto.pdf")
.article("The ELF format - how programs look from the inside", "", "https://www.caichinger.com/elf.html")
.article("Linux kernel QEMU setup - Víctor Colombo", "", "https://vccolombo.github.io/cybersecurity/linux-kernel-qemu-setup/")
.article("Booting a Custom Linux Kernel in QEMU and Debugging it with GDB - Nick Desaulniers", "", "http://nickdesaulniers.github.io/blog/2018/10/24/booting-a-custom-linux-kernel-in-qemu-and-debugging-it-with-gdb/")
.END();

DIV("KVM")
.site("KVM", "", "https://www.linux-kvm.org/")
.site("Planet Virt Tools", "Blogging about open source virtualization", "https://planet.virt-tools.org/")
.article("QEMU+KVM学习笔记", "", "https://www.evernote.com/shard/s325/client/snv?noteGuid=bebe0aaa-9d30-4624-9772-a0af9dfffead&noteKey=a08905a6b6733c5cd945bba560d4d927&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs325%2Fsh%2Fbebe0aaa-9d30-4624-9772-a0af9dfffead%2Fa08905a6b6733c5cd945bba560d4d927&title=QEMU%252BKVM%25E5%25AD%25A6%25E4%25B9%25A0%25E7%25AC%2594%25E8%25AE%25B0")
.article("Native Linux KVM tool", "", "https://lwn.net/Articles/436781/")
.repo("google/novm", "Experimental KVM-based VMM for containers, written in Go.", "https://github.com/google/novm")
.END();

DIV("QEMU")
.site("QEMU Document", "", "https://www.qemu.org/docs/master/")
.article("Setting up QEMU / KQEMU on Ubuntu 7.04 \"Feisty\"", "", "https://ubuntu-tutorials.com/2007/07/04/setting-up-qemu-kqemu-on-ubuntu-704-feisty/")
.END();

DIV("C++")
.site("Compiler Explore", "", "https://godbolt.org/")
.site("C++ Insights", "", "https://cppinsights.io/")
.site("C++ Patterns", "", "https://cpppatterns.com/")
.site("Quick C++ Benchmark", "", "https://quick-bench.com/")
.END();

console.log("What happened?");
DIV("Caches")
.article("Gallery of Processor Cache Effects", "", "http://igoro.com/archive/gallery-of-processor-cache-effects/")
.article("CPU Caches and Why You Care -- Scott Meyers, Ph.D.", "", "https://www.aristeia.com/TalkNotes/ACCU2011_CPUCaches.pdf")
.END();

DIV("Miscellany")
.site("tldr pages", "Simplified and community-driven man pages", "https://tldr.ostera.io/")
.site("Learning Git Branching", "", "https://learngitbranching.js.org/")
.site("Command Not Found", "", "https://command-not-found.com/")
.blog("Some notes on lock-free and wait-free algorithms -- Ross Bencina", "", "http://www.rossbencina.com/code/lockfree?q=~rossb/code/lockfree/")
.article("Software optimization resources", "", "https://www.agner.org/optimize/")
.END();
