DIV("Blogs")
.blog("Brendan Gregg's Homepage", "Performance, mostly", "https://www.brendangregg.com/")
.blog("ARTHURCHIAO'S BLOG", "Network, eBPF, Cloud", "https://arthurchiao.art/index.html")
.blog("Andrii Nakryiko's Blog", "Profiling, eBPF", "https://nakryiko.com/posts/")
.blog("蜗窝科技", "2014-now, Kernel", "http://www.wowotech.net/")
.blog("Winddoing's Notes", "Kernel, Arm, etc.", "https://winddoing.github.io/")
.blog("Corkami", "reverse engineering & technical illustrations", "https://corkami.github.io/")
.blog("Ross Bencina", "Some notes on lock-free and wait-free algorithms", "http://www.rossbencina.com/code/lockfree?q=~rossb/code/lockfree/")
.END();

DIV("General Kernel")
.site("Kernel Source USTC", "USTC mirrors for Linux source code", "http://mirrors.ustc.edu.cn/kernel.org/linux/kernel/")
.site("Linux Kernel Document", "Official document", "https://docs.kernel.org/index.html")
.site("Linux Kernel Newbies", "", "https://kernelnewbies.org/")
.site("LWN", "News from the source", "https://lwn.net/")
.site("bootlin", "Online source code reader", "https://elixir.bootlin.com/linux/latest/source")
.article("SCHED_DEADLINE: What's next?", "", "https://wiki.linuxfoundation.org/_media/realtime/events/rt-summit2017/sched-deadline_claudio-scordino.pdf")
.article("Using EDF in Linux: SCHED DEADLINE", "", "http://disi.unitn.it/~abeni/RTOS/sched_deadline.pdf")
.article("Linux Preemption模式", "Preemptive, Non-preemptive, Voluntary, RT", "https://www.yuanguohuo.com/2020/03/31/linux-preemption-mode/")
.article("Proper Locking Under a Preemptible Kernel: Keeping Kernel Code Preempt-Safe", "", "https://www.kernel.org/doc/html/latest/locking/preempt-locking.html")
.article("Preemption Models", "The Linux Foundation Wiki", "https://wiki.linuxfoundation.org/realtime/documentation/technical_basics/preemption_models")
.article("Linux kernel QEMU setup - Víctor Colombo", "", "https://vccolombo.github.io/cybersecurity/linux-kernel-qemu-setup/")
.article("Booting a Custom Linux Kernel in QEMU and Debugging it with GDB - Nick Desaulniers", "", "http://nickdesaulniers.github.io/blog/2018/10/24/booting-a-custom-linux-kernel-in-qemu-and-debugging-it-with-gdb/")
.END();

DIV("Realtime Kernel")
.site("RT Kernel Source USTC", "USTC mirrors for RT Linux patch", "http://mirrors.ustc.edu.cn/kernel.org/linux/kernel/projects/rt/")
.site("Realtime Linux Wiki", "Official document", "https://rt.wiki.kernel.org/index.php/Main_Page")
.push("Course", "RTOS and Middleware", "University of Trento online course", "http://disi.unitn.it/~abeni/RTOS/")
.article("Realtime kernel patchset", "Arch Wiki", "https://wiki.archlinux.org/title/Realtime_kernel_patchset")
.END();

DIV("eBPF")
.site("eBPF", "Official site", "https://ebpf.io")
.site("Cilium", "Linux Native, API-Aware Networking and Security for Containers", "https://cilium.io/")
.site("Perfetto", "System profiling, app tracing and trace analysis", "https://perfetto.dev/")
.repo("iovisor/bcc", "bcc Github site", "https://github.com/iovisor/bcc")
.END();

DIV("ARM")
.site("Arm Developer", "Official site", "https://developer.arm.com/")
.article("INTRODUCTION TO ARM ASSEMBLY BASICS", "", "https://azeria-labs.com/writing-arm-assembly-part-1/")
.END();

DIV("Solutions to problems")
.solution("Virtualized Intel VT-x/EPT Error", "Enable client's KVM", "https://communities.vmware.com/t5/VMware-Workstation-Player/Virtualized-Intel-VT-x-EPT-Error/td-p/2819556")
.END();



DIV("Below is Not Actively Used or Maintained")
.END();

DIV("ELF")
.book("Linkers and Loaders", "", "https://www.iecc.com/linkers/")
.article("Executable_and_Linkable_Format", "", "https://en.wikipedia.org/wiki/Executable_and_Linkable_Format")
.article("How to Write Shared Libraries", "", "https://akkadia.org/drepper/dsohowto.pdf")
.article("The ELF format - how programs look from the inside", "", "https://www.caichinger.com/elf.html")
.END();

DIV("KVM")
.site("KVM", "", "https://www.linux-kvm.org/")
.site("Planet Virt Tools", "Blogging about open source virtualization", "https://planet.virt-tools.org/")
.article("QEMU+KVM学习笔记", "", "https://www.evernote.com/shard/s325/client/snv?noteGuid=bebe0aaa-9d30-4624-9772-a0af9dfffead&noteKey=a08905a6b6733c5cd945bba560d4d927&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs325%2Fsh%2Fbebe0aaa-9d30-4624-9772-a0af9dfffead%2Fa08905a6b6733c5cd945bba560d4d927&title=QEMU%252BKVM%25E5%25AD%25A6%25E4%25B9%25A0%25E7%25AC%2594%25E8%25AE%25B0")
.article("Native Linux KVM tool", "", "https://lwn.net/Articles/436781/")
.repo("google/novm", "Experimental KVM-based VMM for containers, written in Go.", "https://github.com/google/novm")
.article("Solved: Virtualized Intel VT-x/EPT Error", "", "https://communities.vmware.com/t5/VMware-Workstation-Player/Virtualized-Intel-VT-x-EPT-Error/td-p/2819556")
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

DIV("Caches")
.article("Gallery of Processor Cache Effects", "", "http://igoro.com/archive/gallery-of-processor-cache-effects/")
.article("CPU Caches and Why You Care -- Scott Meyers, Ph.D.", "", "https://www.aristeia.com/TalkNotes/ACCU2011_CPUCaches.pdf")
.END();

DIV("Miscellany")
.site("tldr pages", "Simplified and community-driven man pages", "https://tldr.ostera.io/")
.site("Learning Git Branching", "", "https://learngitbranching.js.org/")
.site("Command Not Found", "", "https://command-not-found.com/")
.article("Software optimization resources", "", "https://www.agner.org/optimize/")
.END();
