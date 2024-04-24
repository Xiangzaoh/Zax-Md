section .data
    file_name db 'index.js', 0  ; Filename to create
    mode      dw 0o422             ; File mode (rw-r--r--)

section .text
    global _start

_start:
    ; Manipulate register contents for syscall
    xor eax, eax        ; Clear eax
    mov al, 8           ; sys_creat syscall number
    push eax            ; Push eax
    lea ebx, [rel file_name] ; Load address of filename into ebx
    mov cx, mode        ; Move file mode into cx
    shl cx, 6           ; Shift file mode left 6 bits
    mov bx, cx          ; Move file mode into bx
    pop eax             ; Restore eax
    int 0x80            ; Make the syscall

    ; Exit the program
    xor eax, eax        ; Clear eax
    mov al, 1           ; sys_exit syscall number
    xor ebx, ebx        ; Clear ebx (exit status 0)
    int 0x80            ; Make the syscall
