# BASH
## Name 

bash - GNU Bourne-Again SHell

## Synopsis

```bash
bash [options] [command_string | file]
```

## Options

**-c**: If present, then commands are read from ths first non-option **command_string**. If there are arguments after **command_string**, the first arguments if assigned to **$0** and anu remaining are assigned to the positional pararmeters. The **$0** sets the name of the shell.

**-i**: If present, the shell is **interactive**.

**-l**: Make bash act as if it had been invoked as a **login shell**.

**-r**: If present, the shell is **restricted**.

**-s**: If present, or if no arguments remain after option processing, then commands are read from the **STDIN**. This option allows ths positional parameters to be set when invoking an **interactive** shell or when reading input through a pipe.

**-D**: A list of all double-quoted strings preceded by **$** is printed on **STDOUT**.