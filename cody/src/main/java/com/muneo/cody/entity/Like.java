package com.muneo.cody.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "likes")
public class Like {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer likeId;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Snap snap;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Member member;
}
